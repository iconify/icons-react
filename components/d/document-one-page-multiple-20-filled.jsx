import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.je99r30uu {
  fill: currentColor;
  d: path("M4 4q0-.103.01-.204A2 2 0 0 1 6 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm7.59 1.992A.5.5 0 0 0 11.5 5h-4l-.09.008A.5.5 0 0 0 7.5 6h4zm0 3.5a.5.5 0 0 0-.09-.992h-4l-.09.008a.5.5 0 0 0 .09.992h4zm0 3.5A.5.5 0 0 0 11.5 12h-4l-.09.008A.5.5 0 0 0 7.5 13h4zM17 14.06V6a2 2 0 0 0-1-1.732V14a3 3 0 0 1-3 3H6a1 1 0 0 0 1 1h6.06A3.94 3.94 0 0 0 17 14.06");
}
</style><path class="je99r30uu"/>`,
		"fallback": "fluent:document-one-page-multiple-20-filled",
	});
}

export default Component;
