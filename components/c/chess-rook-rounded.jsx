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
		"content": `<style>.l08zrxbuq {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20v-2.125q0-.425.175-.8t.5-.65q1.7-1.55 2.575-3.275T8.5 10H8q-.825 0-1.412-.587T6 8V3q0-.425.288-.712T7 2h3q.425 0 .713.288T11 3v2h2V3q0-.425.288-.712T14 2h3q.425 0 .713.288T18 3v5q0 .825-.587 1.413T16 10h-.525q.4 1.425 1.275 3.15t2.575 3.275q.325.275.5.663T20 17.9V20q0 .825-.587 1.413T18 22z");
}
</style><path class="l08zrxbuq"/>`,
		"fallback": "material-symbols:chess-rook-rounded",
	});
}

export default Component;
