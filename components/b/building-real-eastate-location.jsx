import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smwwurb-l.css';
import '../../css/r/r2bxk5btj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smwwurb-l"/><path class="r2bxk5btj"/>`,
		"fallback": "streamline-pixel:building-real-eastate-location",
	});
}

export default Component;
