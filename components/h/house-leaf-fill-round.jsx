import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r-xlytbas {
  fill: currentColor;
  d: path("M16 22H8a5 5 0 0 1-5-5v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22m-.004-12.091a1 1 0 0 0-.905-.904c-1.299-.118-2.629-.078-3.893.265c-1.023.279-2.002.766-2.738 1.544c-1.317 1.395-1.428 3.27-.678 4.99l-.489.49a.999.999 0 1 0 1.414 1.414l.49-.489c1.72.75 3.595.639 4.99-.678c.778-.736 1.265-1.715 1.544-2.738c.343-1.264.383-2.594.265-3.893m-5.215 5.724l.926-.926a.999.999 0 1 0-1.414-1.414l-.926.926c-.317-1.658.868-2.614 2.356-3.02c.757-.205 1.548-.269 2.33-.252c.017.782-.047 1.573-.252 2.33c-.406 1.488-1.362 2.673-3.02 2.356");
}
</style><path class="r-xlytbas"/>`,
		"fallback": "coolicons:house-leaf-fill-round",
	});
}

export default Component;
