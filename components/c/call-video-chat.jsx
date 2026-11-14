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
		"content": `<style>.edm4x3cui {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 6q0-3.25 3.25-3.25h11q3.25 0 3.25 3.25v8q0 3.25-3.25 3.25h-6.218l-3.788 3.314q-.112.099-.254.146q-.141.048-.29.038t-.282-.076q-.134-.066-.232-.178q-.09-.103-.138-.23q-.048-.128-.048-.264v-2.755q-3-.123-3-3.245zm8.313.75H9.438q-1.217 0-2.077.861q-.861.86-.861 2.077v.625q.001 2.937 2.938 2.937h2.125q2.043-.001 2.665-1.423l.686.344q.891.446 1.739-.078t.847-1.52V9.428q.001-.997-.847-1.521t-1.739-.078l-.686.344q-.622-1.422-2.665-1.423");
}
</style><path class="edm4x3cui"/>`,
		"fallback": "uix-solid:call-video-chat",
	});
}

export default Component;
