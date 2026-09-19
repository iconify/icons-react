import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/s_fep1eov.css';
import '../../css/f/fdc_qf35n.css';
import '../../css/a/arhzl8byt.css';
import '../../css/m/mvffjit2t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGpwyLeWP"><g class="rohhhzb0l"><path class="s_fep1eov"/><path class="fdc_qf35n"/><path class="arhzl8byt"/><circle class="mvffjit2t"/></g></mask></defs><path mask="url(#SVGGpwyLeWP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hair-dryer-one",
	});
}

export default Component;
