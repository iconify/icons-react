import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcq83re3x.css';
import '../../css/h/hokgamwpb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcq83re3x"/><path class="hokgamwpb"/>`,
		"fallback": "streamline-pixel:content-files-write-note",
	});
}

export default Component;
