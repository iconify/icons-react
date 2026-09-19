import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wn9wscqte.css';
import '../../css/g/gyvowbb7z.css';
import '../../css/w/wa76u7bdt.css';
import '../../css/j/jl-543bif.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNwqRQLMQ"><g class="rohhhzb0l"><path class="wn9wscqte"/><path class="gyvowbb7z"/><path class="wa76u7bdt"/><path class="jl-543bif"/></g></mask></defs><path mask="url(#SVGNwqRQLMQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:honey",
	});
}

export default Component;
