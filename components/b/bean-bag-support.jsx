import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f7h6oljmi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.875 3.25h-1.474l-.777-1.166q-.051-.077-.12-.139q-.068-.063-.15-.106q-.082-.044-.172-.066T13 1.75h-2q-.093 0-.182.023q-.09.022-.172.066q-.082.043-.15.106q-.069.062-.12.139L9.599 3.25H8.125q-3.375 0-3.375 3.375v2.25q0 .29.025.554Q1.75 10.572 1.75 17q0 4.75 4.75 4.75h11q4.75 0 4.75-4.75q0-6.428-3.025-7.571q.025-.264.025-.554v-2.25q0-3.375-3.375-3.375M9.25 7.75Q9.25 5 12 5t2.75 2.75T12 10.5T9.25 7.75m9.554 3.132q1.946.906 1.946 6.118q0 3.25-3.25 3.25h-11q-3.25 0-3.25-3.25q0-5.212 1.946-6.118q.781 1.368 2.929 1.368h7.75q2.148 0 2.929-1.368");
}
</style><path class="f7h6oljmi"/>`,
		"fallback": "uix-solid:bean-bag-support",
	});
}

export default Component;
