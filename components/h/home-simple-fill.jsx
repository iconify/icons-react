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
		"content": `<style>.pcuzyz5ei {
  fill: currentColor;
  d: path("M10.0605 2.70727C11.1795 1.75931 12.8205 1.75931 13.9395 2.70727L20.9395 8.63794L21.0615 8.74829C21.6586 9.31317 22 10.1004 22 10.927V19.0002C21.9999 20.657 20.6568 22.0002 19 22.0002H5C3.34318 22.0002 2.00011 20.657 2 19.0002V10.927C2.00002 10.0454 2.38775 9.20795 3.06055 8.63794L10.0605 2.70727Z");
}
</style><path class="pcuzyz5ei"/>`,
		"fallback": "keyline-icons:home-simple-fill",
	});
}

export default Component;
