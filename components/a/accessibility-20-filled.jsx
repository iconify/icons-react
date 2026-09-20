import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ufw7_i8va {
  fill: currentColor;
  d: path("M10 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4M5.472 4.15a1.76 1.76 0 0 0-2.317.88c-.4.882-.008 1.917.877 2.31l2.671 1.19A.5.5 0 0 1 7 8.987v1.865a.5.5 0 0 1-.036.187l-1.84 4.555a1.75 1.75 0 0 0 3.244 1.311l1.398-3.459a.25.25 0 0 1 .463 0l1.398 3.459a1.75 1.75 0 0 0 3.245-1.311l-1.836-4.544a.5.5 0 0 1-.036-.187V8.987a.5.5 0 0 1 .297-.457l2.671-1.19a1.74 1.74 0 0 0 .877-2.31a1.76 1.76 0 0 0-2.317-.88l-1.276.569a1.04 1.04 0 0 0-.52.524a3 3 0 0 1-5.463 0a1.04 1.04 0 0 0-.52-.524z");
}
</style><path class="ufw7_i8va"/>`,
		"fallback": "fluent:accessibility-20-filled",
	});
}

export default Component;
