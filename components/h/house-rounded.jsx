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
		"content": `<style>.qow_tm5gw {
  fill: currentColor;
  d: path("M7.308 19q-.667 0-1.141-.475t-.475-1.14V9.946L3 11.952q-.177.115-.365.097q-.189-.018-.323-.195q-.135-.177-.114-.365q.021-.189.198-.324l8.629-6.451q.217-.162.463-.233T12 4.409t.513.072t.462.232l3.371 2.51v-1.28q0-.393.275-.668Q16.897 5 17.29 5t.667.275t.274.667v2.696l3.392 2.528q.171.134.195.323t-.11.365t-.323.195t-.366-.097l-2.692-2.006v7.439q0 .666-.475 1.14t-1.14.475h-1.289q-.666 0-1.14-.475t-.475-1.14v-2q0-.667-.475-1.141t-1.14-.475h-.385q-.667 0-1.141.475t-.475 1.14v2q0 .667-.474 1.142T8.577 19zm2.884-8.994h3.616q0-.704-.542-1.159q-.543-.455-1.266-.455t-1.265.454t-.543 1.16");
}
</style><path class="qow_tm5gw"/>`,
		"fallback": "material-symbols-light:house-rounded",
	});
}

export default Component;
