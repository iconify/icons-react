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
		"content": `<style>.bpcttb7pa {
  fill: currentColor;
  d: path("m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M183 80h-23V57Zm-67 132v-20h8a12 12 0 0 0 0-24h-8v-16h8a12 12 0 0 0 0-24h-8v-12a12 12 0 0 0-24 0v12h-8a12 12 0 0 0 0 24h8v16h-8a12 12 0 0 0 0 24h8v20H60V44h76v48a12 12 0 0 0 12 12h48v108Z");
}
</style><path class="bpcttb7pa"/>`,
		"fallback": "ph:file-archive-bold",
	});
}

export default Component;
