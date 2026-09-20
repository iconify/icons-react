import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b-2i9wm7w.css';
import '../../css/g/gpljrzhtf.css';
import '../../css/k/kaskpqbwl.css';
import '../../css/f/fzp86zbrb.css';
import '../../css/h/hwkx9sb3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="b-2i9wm7w"/><path class="gpljrzhtf"/><path class="kaskpqbwl"/><path class="fzp86zbrb"/><path class="hwkx9sb3f"/></g>`,
		"fallback": "streamline-plump-color:desktop-lock",
	});
}

export default Component;
