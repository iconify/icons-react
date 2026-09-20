import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gr9v9sqoe {
  fill: var(--svg-color--8eb0bd, #8eb0bd);
  d: path("M128 79.778c26.593 0 48.222 21.577 48.222 48.222S154.645 176.222 128 176.222s-48.222-21.63-48.222-48.274s21.577-48.17 48.222-48.17");
}

.p-yvubc1z {
  fill: var(--svg-color--24373e, #24373e);
  d: path("M128 0c70.687 0 128 57.313 128 128s-57.313 128-128 128S0 198.687 0 128S57.313 0 128 0");
}

.sih4usz_l {
  fill: var(--svg-color--f8f4ef, #f8f4ef);
  d: path("M128 46.968c44.774 0 80.98 36.31 80.98 80.98s-36.31 80.98-80.98 80.98s-80.98-36.206-80.98-80.98c0-44.67 36.258-80.98 80.98-80.98");
}
</style><path class="p-yvubc1z"/><path class="sih4usz_l"/><path class="gr9v9sqoe"/>`,
		"fallback": "logos:ethnio",
	});
}

export default Component;
