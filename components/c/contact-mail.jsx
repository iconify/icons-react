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
		"content": `<style>.y-occ_fbw {
  fill: currentColor;
  d: path("M14.192 11.192h6.616V6.577h-6.616zm3.308-1.134l-2.461-1.712v-.884L17.5 9.173l2.462-1.711v.884zM2.616 19.616q-.691 0-1.153-.463T1 18V6q0-.69.463-1.153t1.152-.463h18.77q.69 0 1.153.463T23 6v12q0 .69-.462 1.153t-1.153.463zm8.153-6.116q.731-.73.731-1.77t-.73-1.768T9 9.23t-1.77.73t-.73 1.77t.73 1.769t1.77.73t1.77-.73m-7.554 5.116h11.569q-1.05-1.356-2.554-2.178T9 15.616t-3.23.822t-2.554 2.178");
}
</style><path class="y-occ_fbw"/>`,
		"fallback": "material-symbols-light:contact-mail",
	});
}

export default Component;
