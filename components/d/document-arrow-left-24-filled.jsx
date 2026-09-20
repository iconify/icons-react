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
		"content": `<style>.vjidp_eag {
  fill: currentColor;
  d: path("M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-1.5 15a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.5.5a.5.5 0 0 0 0-1H4.707l1.647-1.646a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L4.707 18z");
}
</style><path class="vjidp_eag"/>`,
		"fallback": "fluent:document-arrow-left-24-filled",
	});
}

export default Component;
