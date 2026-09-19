import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yijf-48kw.css';
import '../../css/e/ehs7z6n_r.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/f/fka6fbbya.css';
import '../../css/v/v70ztibld.css';
import '../../css/u/u9ev_pskv.css';
import '../../css/q/qiua0tb7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGVWUOadpQ"><path class="yijf-48kw"/></clipPath></defs><path class="ehs7z6n_r"/><g clip-path="url(#SVGVWUOadpQ)" transform="matrix(.5625 0 0 .56889 5 0)" class="n1mjunbsu"><g id="SVGvMqLMbpt"><path id="SVG1C7TzcJc" class="fka6fbbya"/><use href="#SVG1C7TzcJc" transform="matrix(-1 0 0 1 200 0)"/><path class="v70ztibld"/></g><use href="#SVGvMqLMbpt" transform="matrix(1 0 0 -1 0 900)"/><path class="u9ev_pskv"/></g><path class="qiua0tb7z"/>`,
		"fallback": "flag:by-1x1",
	});
}

export default Component;
