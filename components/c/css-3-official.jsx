import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":232};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d7xarjb-e {
  fill: var(--svg-color--444, #444);
  d: path("m100.902 231.618l116.456-38.653L256 0H37.867L29.57 43.056h174.812l-5.443 27.49H23.862L15.3 113.602h174.823l-9.602 49.284l-70.547 23.076l-60.955-23.076l4.16-21.528H10.123L0 192.965z");
}
</style><path class="d7xarjb-e"/>`,
		"fallback": "logos:css-3-official",
	});
}

export default Component;
