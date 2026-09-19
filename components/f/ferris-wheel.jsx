import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsgs5hblo.css';
import '../../css/k/kqeknznhe.css';
import '../../css/n/n8_erg_zo.css';
import '../../css/j/jm7vkfgaa.css';
import '../../css/f/fzthzsbvp.css';
import '../../css/k/k2lh28bch.css';
import '../../css/m/mlaubnbnq.css';
import '../../css/r/r7cybhzmx.css';
import '../../css/b/b4aiq8bzd.css';
import '../../css/j/jw_dm13wr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZspyveHk"><g class="ft5dv1b6b"><path class="bsgs5hblo"/><path class="kqeknznhe"/><circle class="n8_erg_zo"/><circle class="jm7vkfgaa"/><circle class="fzthzsbvp"/><circle class="k2lh28bch"/><circle class="mlaubnbnq"/><circle class="r7cybhzmx"/><circle class="b4aiq8bzd"/><path class="jw_dm13wr"/></g></mask></defs><path mask="url(#SVGZspyveHk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ferris-wheel",
	});
}

export default Component;
