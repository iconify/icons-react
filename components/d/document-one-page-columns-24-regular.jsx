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
		"content": `<style>.we386jbjm {
  fill: currentColor;
  d: path("M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v15.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75zm2.25-.75a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75zm3 1.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V5.75A.75.75 0 0 1 9.25 5m6.25.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="we386jbjm"/>`,
		"fallback": "fluent:document-one-page-columns-24-regular",
	});
}

export default Component;
