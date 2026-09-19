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
		"content": `<style>.ulcp3no1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.224 3.927l4.309 9.403a8.4 8.4 0 0 0 4.137 4.137l9.403 4.31c1.903.871 1.903 3.575 0 4.447l-9.403 4.309a8.4 8.4 0 0 0-4.137 4.137l-4.31 9.403c-.871 1.903-3.575 1.903-4.446 0l-4.31-9.403a8.4 8.4 0 0 0-4.137-4.137l-9.403-4.31c-1.903-.871-1.903-3.575 0-4.446l9.403-4.31a8.4 8.4 0 0 0 4.137-4.137l4.31-9.403c.871-1.903 3.575-1.903 4.447 0");
}

.utlt7t7vn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.766 11.378l-3.602 9.696a8.4 8.4 0 0 0 0 5.851l3.602 9.697c.729 1.961-1.183 3.873-3.144 3.144l-9.696-3.602a8.4 8.4 0 0 0-5.851 0l-9.697 3.602c-1.961.729-3.873-1.183-3.144-3.144l3.602-9.696a8.4 8.4 0 0 0 0-5.851l-3.602-9.697c-.729-1.961 1.183-3.873 3.144-3.144l9.697 3.602a8.4 8.4 0 0 0 5.85 0l9.697-3.602c1.961-.729 3.873 1.183 3.144 3.144");
}
</style><path class="ulcp3no1z"/><path class="utlt7t7vn"/>`,
		"fallback": "arcticons:elsa",
	});
}

export default Component;
