import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wogrm8bbk.css';
import '../../css/n/ng8bi6u2k.css';
import '../../css/o/o045svb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wogrm8bbk"/><path class="ng8bi6u2k"/><path class="o045svb-l"/></g>`,
		"fallback": "streamline-ultimate:electronics-fuse",
	});
}

export default Component;
