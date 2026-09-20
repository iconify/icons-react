import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cm1oe6iah {
  d: path("M0 0h256v128H128zm0 128h128l128 128H128v128L0 256z");
}
</style><path class="cm1oe6iah"/>`,
		"fallback": "logos:framer",
	});
}

export default Component;
