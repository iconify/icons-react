import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umoge2bql.css';
import '../../css/l/lex5nub6o.css';
import '../../css/f/fp-kn4xoc.css';
import '../../css/w/wvq9wacvk.css';
import '../../css/b/ba4bo3btf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umoge2bql"/><path class="lex5nub6o"/><path class="fp-kn4xoc"/><path class="wvq9wacvk"/><path class="ba4bo3btf"/>`,
		"fallback": "energy-icons:energy-flow-48-bold",
	});
}

export default Component;
