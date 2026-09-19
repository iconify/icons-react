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
		"content": `<style>.gfv7kqbhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.918 6.917l-17.754 10.25v20.5");
}

.oygby4bis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.754 27.416L24 37.666L6.246 27.416");
}

.uib0_9bwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.836 10.333l-17.754 10.25v20.5M24 3.5L6.246 13.75v20.5");
}

.vifrg5b0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.082 6.917l17.754 10.25v20.5");
}

.wznyl-bzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.754 20.584L24 30.834L6.246 20.584M41.754 34.25L24 44.5L6.246 34.25");
}

.z4nd9sbux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.164 10.333l17.754 10.25v20.5M24 3.5l17.754 10.25v20.5");
}
</style><path class="z4nd9sbux"/><path class="vifrg5b0j"/><path class="uib0_9bwg"/><path class="gfv7kqbhi"/><path class="wznyl-bzt"/><path class="oygby4bis"/>`,
		"fallback": "arcticons:cubex",
	});
}

export default Component;
