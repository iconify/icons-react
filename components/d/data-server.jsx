import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/ich7_wz7i.css';
import '../../css/w/w65gac1-t.css';
import '../../css/h/h6tp2c58s.css';
import '../../css/b/b-02oj7xs.css';
import '../../css/x/xgq024alo.css';
import '../../css/n/n_gc17bxj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="ich7_wz7i"/><path class="w65gac1-t"/><path class="h6tp2c58s"/><path class="b-02oj7xs"/><path class="xgq024alo"/><path class="n_gc17bxj"/></g>`,
		"fallback": "icon-park:data-server",
	});
}

export default Component;
