import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k73k7yq-m.css';
import '../../css/u/u79pk-b6p.css';
import '../../css/k/k74euduoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k73k7yq-m"/><path class="u79pk-b6p"/><path class="k74euduoi"/>`,
		"fallback": "streamline-ultimate:common-file-text-add-bold",
	});
}

export default Component;
