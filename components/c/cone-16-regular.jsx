import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ck1t0lrtw {
  fill: currentColor;
  d: path("M8 15c-2.229 0-6-.421-6-2q0-.06.014-.117l.047-.2a.5.5 0 0 1 .036-.1l5.453-11.3a.52.52 0 0 1 .9 0l5.453 11.3a.5.5 0 0 1 .036.1l.047.2Q14 12.94 14 13c0 1.579-3.771 2-6 2m-4.99-1.981c.197.34 2.025.98 4.99.98c2.94 0 4.763-.628 4.988-.99l-.009-.038L8 2.65z");
}
</style><path class="ck1t0lrtw"/>`,
		"fallback": "fluent:cone-16-regular",
	});
}

export default Component;
