import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kqvtonbeb {
  fill: currentColor;
  d: path("M14 3a7 7 0 0 0-6.931 6.017A5.5 5.5 0 0 0 7.5 20h4.516a7.5 7.5 0 0 1 13.878-4.422Q26 15.055 26 14.5a5.5 5.5 0 0 0-5.069-5.483A7 7 0 0 0 14 3m-1 16.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m5.349-4.08A4 4 0 0 1 23 17.313V16.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.727a2.998 2.998 0 0 0-4.848-.871a.5.5 0 0 1-.707-.707a4 4 0 0 1 1.677-1.003m2.302 8.16A4 4 0 0 1 16 21.687v.814a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.727a2.998 2.998 0 0 0 4.848.871a.5.5 0 0 1 .707.707a4 4 0 0 1-1.677 1.003");
}
</style><path class="kqvtonbeb"/>`,
		"fallback": "fluent:cloud-sync-28-filled",
	});
}

export default Component;
