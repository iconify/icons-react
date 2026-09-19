import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lmgc3mwek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.388 27.264a6.406 6.406 0 1 1 .116-6.745");
}

.n9xa13bam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 3.5L5.92 13.336v20.816L24 44.5l18.08-10.275V13.163zM31.818 24h3.269m-1.634-1.635v3.27M36.631 24h3.27m-1.635-1.635v3.27");
}

.qlj57ib7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.728 30.388a11.896 11.896 0 1 1 .216-12.524m-4.44 2.656l4.44-2.656m-.216 12.524l-4.34-3.124");
}
</style><path class="lmgc3mwek"/><path class="qlj57ib7s"/><path class="n9xa13bam"/>`,
		"fallback": "arcticons:cplusplus",
	});
}

export default Component;
