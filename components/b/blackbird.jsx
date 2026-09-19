import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3hhwvbxz.css';
import '../../css/u/uf2amjwiz.css';
import '../../css/z/zdnax039t.css';
import '../../css/x/xs-3lrjtv.css';
import '../../css/y/ytf-5e_7t.css';
import '../../css/y/yksnw0kmz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s3hhwvbxz"/><path class="uf2amjwiz"/><path class="zdnax039t"/><path class="xs-3lrjtv"/><path clip-rule="evenodd" class="ytf-5e_7t"/><circle class="yksnw0kmz"/></g>`,
		"fallback": "fluent-emoji-flat:blackbird",
	});
}

export default Component;
