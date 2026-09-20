import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/c56xify9v.css';
import '../../css/l/lbzlphtuc.css';
import '../../css/c/cu5kcibki.css';
import '../../css/w/wwf4w80fx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="c56xify9v"/><path class="lbzlphtuc"/><path class="cu5kcibki"/><path class="wwf4w80fx"/></g>`,
		"fallback": "streamline-plump-color:image-saturation",
	});
}

export default Component;
