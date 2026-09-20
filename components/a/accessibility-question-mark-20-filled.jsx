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
		"content": `<style>.vv-jrbt5u {
  fill: currentColor;
  d: path("M10 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4M5.472 4.15a1.76 1.76 0 0 0-2.317.88c-.4.882-.007 1.917.877 2.31l2.671 1.19A.5.5 0 0 1 7 8.987v1.865a.5.5 0 0 1-.036.187l-1.84 4.555a1.75 1.75 0 0 0 3.245 1.311l.085-.213A5.5 5.5 0 0 1 13 9.022v-.035a.5.5 0 0 1 .297-.457l2.671-1.19a1.74 1.74 0 0 0 .878-2.31a1.76 1.76 0 0 0-2.318-.88l-1.276.569c-.246.11-.421.307-.52.524a3 3 0 0 1-5.463 0a1.04 1.04 0 0 0-.52-.524zM18 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.5 1.88a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0-4.877c-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945c.473 0 .854.392.854.95c0 .202-.072.315-.36.544l-.278.215c-.506.404-.716.717-.716 1.288a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.728-.732.728-1.318c0-1.104-.823-1.95-1.854-1.95");
}
</style><path class="vv-jrbt5u"/>`,
		"fallback": "fluent:accessibility-question-mark-20-filled",
	});
}

export default Component;
