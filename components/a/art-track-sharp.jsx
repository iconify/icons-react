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
		"content": `<style>.nd5_dqb2z {
  fill: currentColor;
  d: path("M13.77 18h-12V6h12zM17 18V6h1v12zm4.23 0V6h1v12zm-17-3.23h7.078l-2.139-2.886l-1.9 2.5l-1.4-1.85z");
}
</style><path class="nd5_dqb2z"/>`,
		"fallback": "material-symbols-light:art-track-sharp",
	});
}

export default Component;
