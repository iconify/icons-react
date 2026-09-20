import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ycjm22cqv {
  fill: currentColor;
  d: path("M12.816 2.317a4.5 4.5 0 0 1 6.364 0l10.499 10.499a4.5 4.5 0 0 1 0 6.364L19.18 29.679a4.5 4.5 0 0 1-6.364 0L2.318 19.18a4.5 4.5 0 0 1 0-6.364zm4.95 1.415a2.5 2.5 0 0 0-3.536 0L3.732 14.23a2.5 2.5 0 0 0 0 3.536L14.23 28.265a2.5 2.5 0 0 0 3.536 0l10.499-10.499a2.5 2.5 0 0 0 0-3.536zm2.027 7.061a1 1 0 1 1 1.414 1.414L17.414 16l3.793 3.793a1 1 0 0 1-1.414 1.414L16 17.414l-3.793 3.793a1 1 0 0 1-1.414-1.414L14.586 16l-3.793-3.793a1 1 0 1 1 1.414-1.414L16 14.586z");
}
</style><path class="ycjm22cqv"/>`,
		"fallback": "fluent:diamond-dismiss-32-regular",
	});
}

export default Component;
