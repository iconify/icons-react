import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/h744_ccdj.css';
import '../../css/p/p40iu0bgs.css';
import '../../css/k/kc38scbvr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN0NSScNY"><g class="s9cl3zbei"><path class="h744_ccdj"/><circle class="p40iu0bgs"/><path class="kc38scbvr"/></g></mask></defs><path mask="url(#SVGN0NSScNY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-block-one",
	});
}

export default Component;
