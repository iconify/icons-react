import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jqduq2nau.css';
import '../../css/k/k8_24nbcn.css';
import '../../css/x/xez_eqbcg.css';
import '../../css/n/njnrc3ksm.css';
import '../../css/z/zn7mzwbpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="jqduq2nau"/><path class="k8_24nbcn"/><rect class="xez_eqbcg"/><path class="njnrc3ksm"/><path class="zn7mzwbpc"/></g>`,
		"fallback": "icon-park:beauty-instrument",
	});
}

export default Component;
