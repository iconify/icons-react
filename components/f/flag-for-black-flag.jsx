import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i4z9v2lnq {
  fill: currentColor;
  d: path("M56 25.902q-4.296-11.613-8.598-23.226c-15.84-4.854-21.363 18.166-37.205 13.312L8 16.776L24.744 62h2.488l-8.437-22.786l.001.002C34.639 44.067 40.161 21.049 56 25.902");
}
</style><path class="i4z9v2lnq"/>`,
		"fallback": "emojione-monotone:flag-for-black-flag",
	});
}

export default Component;
