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
		"content": `<style>.gtlcgnbct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.332 16.08L5.5 16.988v-5.453l35.832.909zM10.953 34.907h6.231m-6.231-7.012h6.231m-5.842-5.453h5.453m5.842-6.232v-3.896m6.231 3.896v-3.896M35.1 24.78V12.313M27.7 24.78h14.8v3.115H27.7z");
}

.k-dokgb3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.963 41.918h-7.79l1.559-35.836h4.673z");
}

.w1gzlfl0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.332 16.08L5.5 16.988v-5.453l35.832.909z");
}
</style><path class="w1gzlfl0x"/><path class="k-dokgb3e"/><path class="gtlcgnbct"/>`,
		"fallback": "arcticons:emoji-building-construction",
	});
}

export default Component;
