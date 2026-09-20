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
		"content": `<style>.ajoihx6ej {
  fill: currentColor;
  d: path("M128 28a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4a36 36 0 1 1-31.18 18a4 4 0 0 0-1.47-5.47l-48.5-28A4 4 0 0 0 41.39 78A100 100 0 1 0 128 28M46.38 85.5l41.67 24a43.86 43.86 0 0 0-3.4 25.93l-46.47 12.5a92.2 92.2 0 0 1 8.2-62.43m-6.13 70.15l46.46-12.45A44.11 44.11 0 0 0 124 171.81v48.1a92.17 92.17 0 0 1-83.75-64.26M132 219.91v-48.1a44 44 0 0 0 0-87.63V36.09a92 92 0 0 1 0 183.82");
}
</style><path class="ajoihx6ej"/>`,
		"fallback": "ph:chart-donut-thin",
	});
}

export default Component;
