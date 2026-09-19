import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0jksjblz.css';
import '../../css/b/bfpxu9v3l.css';
import '../../css/j/jfkme2bwa.css';
import '../../css/v/v5iekpb5c.css';
import '../../css/z/z63kx322b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGaVVwMdAA"><g class="ft5dv1b6b"><circle class="t0jksjblz"/><path class="bfpxu9v3l"/><path class="jfkme2bwa"/><path class="v5iekpb5c"/><path class="z63kx322b"/></g></mask></defs><path mask="url(#SVGaVVwMdAA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:ad",
	});
}

export default Component;
