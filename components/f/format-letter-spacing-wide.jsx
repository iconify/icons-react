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
		"content": `<style>.ox0qi1els {
  fill: currentColor;
  d: path("M4 19V5h1v14zm15 0V5h1v14zM7.773 17l3.673-9.923h1.05L16.227 17H15.15l-1.004-2.839H9.808L8.812 17zm2.362-3.712h3.692l-1.816-5.111h-.038z");
}
</style><path class="ox0qi1els"/>`,
		"fallback": "material-symbols-light:format-letter-spacing-wide",
	});
}

export default Component;
