import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/se8cn43la.css';
import '../../css/h/hylm6cbcz.css';
import '../../css/x/x-smzibff.css';
import '../../css/n/noycm4iks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="se8cn43la"/><path class="hylm6cbcz"/><path class="x-smzibff"/><path class="noycm4iks"/></g>`,
		"fallback": "circle-flags:cd",
	});
}

export default Component;
