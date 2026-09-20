import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyzgxpkzp.css';
import '../../css/n/n7e0l3bmv.css';
import '../../css/a/a0qim0bok.css';
import '../../css/f/fqkgllbrl.css';
import '../../css/w/wukl3nbsj.css';
import '../../css/v/va4jweelj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pyzgxpkzp"/><path class="n7e0l3bmv"/><path class="a0qim0bok"/><path class="fqkgllbrl"/><path class="wukl3nbsj"/><path class="va4jweelj"/></g>`,
		"fallback": "streamline-ultimate:audio-file-sync",
	});
}

export default Component;
