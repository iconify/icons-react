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
		"content": `<style>.v6d-t3bdp {
  fill: currentColor;
  d: path("M3 4.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5m12.878 6.782l.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.093.354a.423.423 0 0 1 0 .798l-1.072.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.22 2.22 0 0 0-1.398-1.403l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0M8 4.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m6-.5a3 3 0 1 1 0 6H6a2 2 0 1 0 0 4h5.09c-.055.147-.09.313-.09.496c0 .194.035.36.09.504H6a3 3 0 1 1 0-6h8a2 2 0 1 0 0-4H9.5a.5.5 0 0 1 0-1z");
}
</style><path class="v6d-t3bdp"/>`,
		"fallback": "fluent:flow-sparkle-20-regular",
	});
}

export default Component;
