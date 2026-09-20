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
		"content": `<style>.knswxh7kw {
  fill: currentColor;
  d: path("M4 6a3 3 0 0 1 3-3a1 1 0 0 1 0 2a1 1 0 0 0-1 1v3.938c0 .789-.307 1.519-.82 2.062c.513.543.82 1.273.82 2.062V18a1 1 0 0 0 1 1a1 1 0 1 1 0 2a3 3 0 0 1-3-3v-3.938a1 1 0 0 0-.757-.97l-.486-.122a1 1 0 0 1 0-1.94l.486-.121A1 1 0 0 0 4 9.939zm16 0a3 3 0 0 0-3-3a1 1 0 1 0 0 2a1 1 0 0 1 1 1v3.938c0 .789.307 1.519.82 2.062a3 3 0 0 0-.82 2.062V18a1 1 0 0 1-1 1a1 1 0 1 0 0 2a3 3 0 0 0 3-3v-3.938a1 1 0 0 1 .758-.97l.485-.122a1 1 0 0 0 0-1.94l-.485-.121a1 1 0 0 1-.758-.97z");
}
</style><path class="knswxh7kw"/>`,
		"fallback": "fluent:braces-24-filled",
	});
}

export default Component;
