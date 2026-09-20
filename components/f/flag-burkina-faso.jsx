import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f6-23hbvt {
  fill: var(--svg-color--fcd116, #fcd116);
  d: path("M15.407 21.99L18 20.106l2.593 1.884l-.991-3.048L20.899 18l1.296-.942H18.99L18 14.01l-.99 3.048h-3.205l1.296.942l1.297.942z");
}

.j2foz168v {
  fill: var(--svg-color--009e49, #009e49);
  d: path("m19.602 18.942l.99 3.048L18 20.106l-2.593 1.884l.99-3.048L15.101 18H0v9a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H20.899z");
}

.xpq51xbej {
  fill: var(--svg-color--ef2b2d, #ef2b2d);
  d: path("M32 5H4a4 4 0 0 0-4 4v9h15.101l-1.296-.942h3.205L18 14.01l.99 3.048h3.205L20.899 18H36V9a4 4 0 0 0-4-4");
}
</style><path class="j2foz168v"/><path class="xpq51xbej"/><path class="f6-23hbvt"/>`,
		"fallback": "twemoji:flag-burkina-faso",
	});
}

export default Component;
