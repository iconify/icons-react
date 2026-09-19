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
		"content": `<style>.lsao3lrlv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.82 34.212l20.048-19.933L20.075 4.5v39l9.793-9.779L9.82 13.788");
}

.wdj_pqb-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.177 18.789L24.936 24l5.241 5.211M24.936 24H38.18");
}
</style><path class="lsao3lrlv"/><path class="wdj_pqb-c"/>`,
		"fallback": "arcticons:bluetooth-filetransfer",
	});
}

export default Component;
