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
		"content": `<style>.nepg9ywpn {
  fill: currentColor;
  d: path("M6.528 7.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M5.781 15a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5zm-.75-3.25a.75.75 0 0 1 .75-.75h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.75-.75M15 21a1.986 1.986 0 0 0 1.934-1.597l.48-2.403h2.836A1.75 1.75 0 0 0 22 15.25V9.261A2.26 2.26 0 0 0 19.75 7v-.004H14.5V5.25A2.25 2.25 0 0 0 12.25 3h-8A2.25 2.25 0 0 0 2 5.25v12.5A3.25 3.25 0 0 0 5.25 21zM3.5 5.25a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v13.764q0 .251.06.486H5.25a1.75 1.75 0 0 1-1.75-1.75zm11 3.246h3.11a2 2 0 0 0-.088.322l-2.059 10.291a.486.486 0 0 1-.963-.095zm4.493.616a.761.761 0 0 1 1.507.15v5.988a.25.25 0 0 1-.25.25h-2.535z");
}
</style><path class="nepg9ywpn"/>`,
		"fallback": "fluent:feed-24-regular",
	});
}

export default Component;
