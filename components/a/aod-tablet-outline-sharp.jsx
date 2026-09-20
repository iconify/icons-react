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
		"content": `<style>.jhii_onpi {
  fill: currentColor;
  d: path("M1 20V4h22v16zM4 6H3v12h1zm2 12h12V6H6zM20 6v12h1V6zm0 0h1zM4 6H3zm4 5.5V10h8v1.5zm1 3V13h6v1.5z");
}
</style><path class="jhii_onpi"/>`,
		"fallback": "material-symbols:aod-tablet-outline-sharp",
	});
}

export default Component;
