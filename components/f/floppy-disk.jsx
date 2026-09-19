import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awlbw9bfu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awlbw9bfu"/>`,
		"fallback": "gravity-ui:floppy-disk",
	});
}

export default Component;
