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
		"content": `<style>.bm7zqqbho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.888 40.753h6.348a1.48 1.48 0 0 0 1.48-1.48V14.845a1.48 1.48 0 0 0-1.48-1.48H8.808a1.48 1.48 0 0 0-1.48 1.48v6.206");
}

.l3na4mb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.495 21.345H6.628a1.144 1.144 0 0 0-1.144 1.144v18.867A1.144 1.144 0 0 0 6.628 42.5h18.867a1.144 1.144 0 0 0 1.144-1.143h0V22.489a1.144 1.144 0 0 0-1.144-1.144m-12.449 4.546h6.031m-6.031 6.032h3.92m-3.92-6.032v12.064");
}

.u7g9fqb0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.855 39.146h5.842a1.82 1.82 0 0 0 1.819-1.819V7.319A1.82 1.82 0 0 0 40.697 5.5H10.69a1.82 1.82 0 0 0-1.82 1.819v5.636");
}
</style><path class="u7g9fqb0l"/><path class="bm7zqqbho"/><path class="l3na4mb-z"/>`,
		"fallback": "arcticons:fluentreader",
	});
}

export default Component;
